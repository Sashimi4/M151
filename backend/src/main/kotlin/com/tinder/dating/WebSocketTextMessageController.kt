package com.tinder.dating

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = arrayOf("http://localhost:8080", "http://localhost:3000"),
    allowedHeaders = arrayOf("Requestor-Type"),
    exposedHeaders = arrayOf("X-Get-Header"))
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