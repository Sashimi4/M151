package com.tinder.dating.nosqlData.service

import com.tinder.dating.exception.ResourceNotFoundException
import com.tinder.dating.nosqlData.domain.Message
import com.tinder.dating.nosqlData.domain.MessageStatus
import com.tinder.dating.nosqlData.repo.MessageRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service
import java.util.*
import kotlin.collections.ArrayList


@Service
class MessageService @Autowired constructor(
    val messageRepository: MessageRepository,
    private val chatRoomService: ChatRoomService,
    private val mongoOperations: MongoOperations
) {

    fun saveMessage(message: Message): Message {
        message.status = MessageStatus.RECEIVED
        return messageRepository.save(message)
    }

    fun countNewMessages(senderId: UUID, receiverId: UUID): Long {
        return messageRepository.countBySenderIdAndReceiverIdAndStatus(senderId, receiverId, MessageStatus.RECEIVED)
    }

    fun findChatMessages(senderId: UUID, receiverId: UUID): List<Message>? {
        val chatId = chatRoomService.getChatId(senderId, receiverId, false)

        val messages = chatId!!.map { cId: String ->
            messageRepository.findByChatId(
                cId
            )
        }.orElse(ArrayList<Message>())

        if (messages.isNotEmpty()) {
            updateStatuses(senderId, receiverId, MessageStatus.DELIVERED)
        }

        return messages
    }

    fun findById(id: UUID): Message? {
        return messageRepository
            .findById(id)
            .map { message ->
                message.status = MessageStatus.DELIVERED
                messageRepository.save(message)
            }
            .orElseThrow { ResourceNotFoundException("can't find message ($id)") }
    }

    fun updateStatuses(senderId: UUID, recipientId: UUID, status: MessageStatus) {
        val query = Query(
            Criteria
                .where("senderId").`is`(senderId)
                .and("recipientId").`is`(recipientId)
        )
        val update: Update = Update.update("status", status)
        mongoOperations.updateMulti(query, update, Message::class.java)
    }
}