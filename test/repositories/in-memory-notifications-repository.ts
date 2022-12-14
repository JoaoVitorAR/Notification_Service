import { Notification } from "../../src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {

    public notifications: Notification[] = [];

    async create(notification: Notification) {
        //criaçao repository fake para realização da passagem de parametro no teste
        this.notifications.push(notification);
    }
}