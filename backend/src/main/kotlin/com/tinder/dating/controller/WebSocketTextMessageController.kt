package com.tinder.dating.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.Header
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.simp.annotation.SendToUser
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

//Still subject to change
@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"],
    allowedHeaders = ["Requestor-Type"],
    exposedHeaders = ["X-Get-Header"]
)
@RestController
class WebSocketTextMessageController {

    @Autowired
    var template: SimpMessagingTemplate? = null

    @MessageMapping("/private-messages")
    @SendToUser("/queue/private-messages")
    fun sendSpecific(
        @Payload message: String,
        user: Principal,
        @Header("simpSessionId") sessionId: String
    ) {
        print("Received message: $message")
        print("User who invoked the call: $user")
    }

    /*@MessageMapping("/private-message")
    fun recMessage(@Payload message: String): String {
        template.convertAndSendToUser()
        print("Received message: $message")
        return message
    }*/
}