import { useEffect, useState } from 'react';
import { useAuthorizedSubscription } from '../../base';

type TNotification = {
    category: string;
    id: number;
    links: {
        href: string;
        rel: string;
    }[];
    message_key: string;
    payload: string;
    read: boolean;
    removed: boolean;
};

const handleData = (incomingMessages: TNotification[], prevMessages: TNotification[]) => {
    if (!incomingMessages) return prevMessages;

    let notifications = prevMessages;
    for (let updateIdx = 0; updateIdx < incomingMessages.length; updateIdx++) {
        const update = incomingMessages[updateIdx];

        const existingMessageIndex = notifications.findIndex((message: TNotification) => message.id === update.id);
        const existingMessage = notifications[existingMessageIndex];

        if (existingMessage) {
            if (update.removed)
                notifications = notifications.filter((message: TNotification) => message.id !== update.id);
            else notifications[existingMessageIndex] = { ...existingMessage, ...update };
        } else notifications.unshift(update);
    }

    notifications.sort((a: TNotification, b: TNotification) => b.id - a.id);

    return [...notifications];
};

export const useNotificationsList = () => {
    const { data, ...rest } = useAuthorizedSubscription('notifications_list');
    const [messages, setMessages] = useState<TNotification[]>([]);

    useEffect(() => {
        if (data?.notifications_list) {
            setMessages(prevMessages => {
                return handleData(data.notifications_list.messages, prevMessages);
            });
        }
    }, [data]);

    return {
        data: messages,
        ...rest,
    };
};
