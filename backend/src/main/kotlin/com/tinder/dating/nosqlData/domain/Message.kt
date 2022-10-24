package com.tinder.dating.nosqlData.domain

import com.tinder.dating.sqlData.domain.User
import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import org.springframework.data.mongodb.core.mapping.Document
import java.math.BigInteger
import java.sql.Date
import java.sql.Timestamp
import java.util.*

@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "message")
class Message (

    var id : UUID,

    var chatId : String,

    var senderId : UUID,

    var senderName : String,

    var receiverId : UUID,

    var receiverName : String,

    var content : String,

    var timestamp: Date,

    var status: MessageStatus,
        )
