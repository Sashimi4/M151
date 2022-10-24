package com.tinder.dating.nosqlData.controller

import com.tinder.dating.nosqlData.domain.ChatNotification
import com.tinder.dating.nosqlData.domain.Message
import com.tinder.dating.nosqlData.service.ChatRoomService
import com.tinder.dating.nosqlData.service.MessageService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import java.util.*

@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"],
    allowedHeaders = ["Requestor-Type"],
    exposedHeaders = ["X-Get-Header"]
)
@Controller
class ChatController @Autowired constructor(
    private val messagingTemplate: SimpMessagingTemplate,
    private val messageService: MessageService,
    private val chatRoomService: ChatRoomService,
) {

    @MessageMapping("/chat")
    fun processMessage(@Payload message: Message) {
        message.id = UUID.randomUUID()
        val chatId = chatRoomService.getChatId(message.senderId, message.receiverId, true)

        if (chatId != null) {
            message.chatId = (chatId.get())
        }

        print(message)

        val savedMessage: Message = messageService.saveMessage(message)

        messagingTemplate.convertAndSendToUser(
            message.receiverId.toString(), "/queue/messages", ChatNotification(savedMessage.id, savedMessage.senderId, savedMessage.senderName)
        )
    }

    @GetMapping("/messages/{senderId}/{receiverId}/count")
    fun countNewMessages(
        @PathVariable senderId: UUID,
        @PathVariable receiverId: UUID
        ): ResponseEntity<Long> {
        return ResponseEntity.ok(messageService.countNewMessages(senderId, receiverId))
    }

    @GetMapping("/messages/{senderId}/{receiverId}")
    fun findChatMessages(
        @PathVariable senderId: UUID,
        @PathVariable receiverId: UUID
    ): ResponseEntity<Any> {
        return ResponseEntity.ok(messageService.findChatMessages(senderId,receiverId))
    }

    @GetMapping("/messages/{id}")
    fun findMessage(
        @PathVariable id: UUID
    ): ResponseEntity<Any> {
        return ResponseEntity.ok(messageService.findById(id))
    }

}