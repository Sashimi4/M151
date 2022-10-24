package com.tinder.dating.nosqlData.domain

import com.tinder.dating.sqlData.domain.User
import lombok.AllArgsConstructor
import lombok.NoArgsConstructor
import org.springframework.data.mongodb.core.mapping.Document
import java.math.BigInteger
import java.sql.Timestamp

@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "message")
class Message (

    val id : BigInteger,

    val content : String,

    val sender_id : User,

    val receiver_id : User,

    //val status : MessageStatus

    val timestamp: Timestamp,
        )
