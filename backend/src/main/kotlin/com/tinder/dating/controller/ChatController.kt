package com.tinder.dating.controller

import com.tinder.dating.nosqlData.domain.ChatNotification
import com.tinder.dating.nosqlData.domain.Message
import com.tinder.dating.nosqlData.domain.MessageStatus
import com.tinder.dating.service.ChatRoomService
import com.tinder.dating.service.MessageService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.Header
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import java.security.Principal
import java.util.*

@Controller
class ChatController @Autowired constructor(
    private val messagingTemplate: SimpMessagingTemplate,
    private val messageService: MessageService,
    private val chatRoomService: ChatRoomService,
) {

    @MessageMapping("/chat")
    fun processMessage(@Payload message: String, user: Principal, @Header("simpSessionId") sessionId: String) {

        print("Message received")
        /*
        message.id = UUID.randomUUID()
        val chatId = chatRoomService.getChatId(message.senderId, message.receiverId, true)

        if (chatId != null) {
            message.chatId = (chatId.get())
        }

        print(message)

        val savedMessage: Message = messageService.saveMessage(message)
         */

        messagingTemplate.convertAndSendToUser(
            "", "/user/queue/direct-message", message//ChatNotification(savedMessage.id, savedMessage.senderId, savedMessage.senderName)
        )
    }

    @GetMapping("/messages/{senderId}/{receiverId}/count")
    fun countNewMessages(
        @PathVariable senderId: UUID,
        @PathVariable receiverId: UUID
        ): ResponseEntity<Long> {
        return ResponseEntity.ok(messageService.countNewMessages(senderId, receiverId))
    }

    @GetMapping("/messages/{id}")
    fun findMessage(
        @PathVariable id: UUID
    ): ResponseEntity<Any> {
        return ResponseEntity.ok(messageService.findById(id))
    }


    //Tests
    @GetMapping("/ring")
    fun test(): ResponseEntity<Any> {
        return ResponseEntity.ok("You called me?")
    }

    @GetMapping("/getAllMessages")
    fun test1(): ResponseEntity<Any> {
        val messages = messageService.messageRepository.findAll()
        return ResponseEntity.ok(messages)
    }

    @PostMapping("/saveMessage")
    fun test2(): ResponseEntity<Message> {
        val message = messageService.saveMessage(Message(UUID.randomUUID(), UUID.randomUUID(), UUID.randomUUID(), "Jonah", UUID.randomUUID(), "Sarah", "Message here crazy I know but still keep it up", java.sql.Date(System.currentTimeMillis()), MessageStatus.RECEIVED))
        return ResponseEntity.ok(message)
    }

}