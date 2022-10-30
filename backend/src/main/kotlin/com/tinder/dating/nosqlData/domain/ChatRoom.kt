package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "chatroom")
data class ChatRoom (
    private val id: UUID,
    private val senderId: UUID,
    private val receiverId: UUID,
    private val matchId: UUID,
)