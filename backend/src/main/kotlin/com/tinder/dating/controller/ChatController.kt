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
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import java.security.Principal
import java.util.*

@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"])
@RestController
class ChatController @Autowired constructor(
    private val messagingTemplate: SimpMessagingTemplate,
    private val messageService: MessageService,
    private val chatRoomService: ChatRoomService,
) {

    @MessageMapping("/chat")
    @PreAuthorize("hasAuthority('create:messages')")
    fun processMessage(@Payload message: Message) {

        message.id = UUID.randomUUID()

        val savedMessage: Message = messageService.saveMessage(message)

        messagingTemplate.convertAndSendToUser(
            message.senderId.toString(), "/user/queue/direct-message", savedMessage//ChatNotification(savedMessage.id, savedMessage.senderId, savedMessage.senderName)
        )
    }

    @GetMapping("/messages/{senderId}/{receiverId}/count")
    @PreAuthorize("hasAuthority('create:messages')")
    fun countNewMessages(
        @PathVariable senderId: UUID,
        @PathVariable receiverId: UUID
        ): ResponseEntity<Long> {
        return ResponseEntity.ok(messageService.countNewMessages(senderId, receiverId))
    }

    // admin
    @GetMapping("/messages/{id}")
    @PreAuthorize("hasAuthority('read:allmessages')")
    fun retrieveMessageById(
        @PathVariable id: UUID
    ): ResponseEntity<Any> {
        return ResponseEntity.ok(messageService.findById(id))
    }

    // admin
    @GetMapping("/messages")
    @PreAuthorize("hasAuthority('read:allmessages')")
    fun retrieveAllMessages(): ResponseEntity<Any> {
        val messages = messageService.messageRepository.findAll()
        return ResponseEntity.ok(messages)
    }


}