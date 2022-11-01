package com.tinder.dating.nosqlData.domain

import com.tinder.dating.sqlData.domain.User
import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import org.springframework.data.mongodb.core.mapping.Document
import java.sql.Date
import java.util.*

@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "message")
data class Message (

    var id : UUID,

    var chatId : UUID, //FK from chatRoom

    var senderId : UUID,

    var senderName : String,

    var receiverId : UUID,

    var receiverName : String,

    var content : String,

    var timestamp: Date,

    var status: MessageStatus,
        )
