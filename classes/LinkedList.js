import { Node } from './Node.js';

export class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }


    insertFirst(data) {
        this.head = new Node(data, this.head); // remember that the new Node is made before being assigned 
        this.size++;
    }


    
    insertLast(data) {
        if(this.head === null) {
            this.head = new Node(data, this.head)
        } else {
                let current = this.head;
                    while(current.next) {
                    current = current.next;
                    }
    
                current.next = new Node(data)
            }
        this.size++;
    }
 

    insertAt (data, index) {

    }


    removeLast() {
        if(this.head === null) {
            alert("There are no items in list")
        } else {
                let current = this.head;
                while(current.next) {
                current = current.next 
                }

                current = null;
        }
    }
    

    printList() {
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }

    




}