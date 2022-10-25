package com.tinder.dating.service

import com.tinder.dating.nosqlData.domain.ChatRoom
import com.tinder.dating.nosqlData.repo.ChatRoomRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*


@Service
class ChatRoomService {

    @Autowired
    lateinit var chatRoomRepository: ChatRoomRepository

    fun getChatId(senderId: UUID, receiverId: UUID, createIfNotExist: Boolean
    ): Optional<String>? {
        return chatRoomRepository
            .findBySenderIdAndReceiverId(senderId, receiverId)
            .map(ChatRoom::chatId)
            .or {
                if (!createIfNotExist) {
                    return@or Optional.empty()
                }
                val chatId = String.format("%s_%s", senderId, receiverId)
                val senderRecipient: ChatRoom = ChatRoom(UUID.randomUUID(), chatId = chatId, senderId = senderId, receiverId = receiverId)
                val recipientSender: ChatRoom = ChatRoom(UUID.randomUUID(), chatId = chatId, senderId = receiverId, receiverId = senderId)
                chatRoomRepository.save(senderRecipient)
                chatRoomRepository.save(recipientSender)
                Optional.of(chatId)
            }
    }
}