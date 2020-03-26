class ChatRoom {
    public messages: string[];
    public participants: Participant[];
    constructor(participants: Participant[]){
        this.messages = [];
        this.participants = participants;
    }
    
}

class Participant {
    public messages: string[];
    public observer: Observer
    constructor(){
        this.messages = []
    }
    sendMessage(message: string){
        this.observer.setMessages(message)
    }
    
}

class Observer {
    public chatRoom: ChatRoom
    constructor(chatRoom: ChatRoom){
        this.chatRoom = chatRoom
    }
    setMessages(message: string){
        this.chatRoom.messages.push(message)
        this.chatRoom.participants.forEach(participant => {
            console.log('New message available');
            participant.messages = this.chatRoom.messages;
        })
    }
}

