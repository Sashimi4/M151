package com.tinder.dating.nosqlData.repo

import com.tinder.dating.nosqlData.domain.ChatRoom
import org.springframework.data.mongodb.repository.MongoRepository
import java.util.*

interface ChatRoomRepository: MongoRepository<ChatRoom, UUID> {

    fun findBySenderIdAndReceiverId(senderId: UUID, receiverId: UUID): Optional<ChatRoom>

}