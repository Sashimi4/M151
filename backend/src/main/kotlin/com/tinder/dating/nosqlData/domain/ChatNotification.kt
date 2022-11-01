package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "chatNotification")
data class ChatNotification (
    val id: UUID,
    val senderId: UUID,
    val senderName: String,
)