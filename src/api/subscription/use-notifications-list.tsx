import { useEffect, useState } from 'react';
import { useAuthorizedSubscription } from '../../base';
import { TSocketResponse } from '../../types/api.types';

type TNotifications = TSocketResponse<'notifications_list'>['notifications_list']['messages'];

const handleData = (incomingMessages: TNotifications, prevMessages: TNotifications) => {
    if (!incomingMessages) return prevMessages;

    let notifications = prevMessages;
    for (let updateIdx = 0; updateIdx < incomingMessages.length; updateIdx++) {
        const update = incomingMessages[updateIdx];

        const existingMessageIndex = notifications.findIndex((message: TNotifications[number]) => message.id === update.id);
        const existingMessage = notifications[existingMessageIndex];

        if (existingMessage) {
            if (update.removed)
                notifications = notifications.filter((message: TNotifications[number]) => message.id !== update.id);
            else notifications[existingMessageIndex] = { ...existingMessage, ...update };
        } else notifications.unshift(update);
    }

    notifications.sort((a: TNotifications[number], b: TNotifications[number]) => b.id - a.id);

    return [...notifications];
};

export const useNotificationsList = () => {
    const { data, ...rest } = useAuthorizedSubscription('notifications_list');
    const [messages, setMessages] = useState<TNotifications>([]);

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
