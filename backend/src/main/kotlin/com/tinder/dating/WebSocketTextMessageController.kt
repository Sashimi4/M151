package com.tinder.dating

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RestController

//Still subject to change
@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"],
    allowedHeaders = ["Requestor-Type"],
    exposedHeaders = ["X-Get-Header"]
)
@RestController
class WebSocketTextMessageController {

    @Autowired
    var template: SimpMessagingTemplate? = null

    @MessageMapping("/message")
    @SendTo("/communication")
    fun receiveMessage(@Payload message: String): String {
        print("Received message: $message")
        return message
    }

    /*@MessageMapping("/private-message")
    fun recMessage(@Payload message: String): String {
        template.convertAndSendToUser()
        print("Received message: $message")
        return message
    }*/
}