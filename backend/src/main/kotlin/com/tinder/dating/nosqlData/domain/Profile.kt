package com.tinder.dating.nosqlData.domain

import org.bson.types.Binary
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "profile")
data class Profile (
    val id: UUID,
    val usersId: UUID,
    val name: String,
    val photoUrl: String,
    val aboutDescription: String,
    val gender: GENDERTYPE,
    val genderPreference: GENDERTYPE,
)