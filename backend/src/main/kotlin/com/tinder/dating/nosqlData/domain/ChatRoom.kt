package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "chatroom")
data class ChatRoom (
    val id: UUID,
    val senderId: UUID,
    val receiverId: UUID,
    val matchId: UUID,
)