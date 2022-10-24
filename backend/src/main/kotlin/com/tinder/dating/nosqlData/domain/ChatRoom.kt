package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*


@Document(collection = "chatroom")
class ChatRoom (
    val id: UUID,
    val chatId: String,
    val senderId: UUID,
    val receiverId: UUID,
)