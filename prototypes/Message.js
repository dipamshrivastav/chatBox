/**
 * Created by Dipam on 12/11/2017.
 */

function Message(senderId, message, senderName){
    this.senderId = senderId;
    this.message = message;
    this.senderName = senderName,
    this.time = new Date();
}