package com.tinder.dating.nosqlData.repo

import com.tinder.dating.nosqlData.domain.Message
import com.tinder.dating.nosqlData.domain.MessageStatus
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface MessageRepository : MongoRepository<Message, UUID> {

    fun countBySenderIdAndReceiverIdAndStatus(senderId: UUID, receiverId: UUID, status: MessageStatus): Long

    fun findByChatId(chatId: String): List<Message>
}