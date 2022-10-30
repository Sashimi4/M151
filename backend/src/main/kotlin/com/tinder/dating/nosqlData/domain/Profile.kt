package com.tinder.dating.nosqlData.domain

import org.bson.types.Binary
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "profile")
data class Profile (
    private val id: UUID,
    private val usersId: UUID,
    private val name: String,
    private val photoUrl: String,
    private val aboutDescription: String,
    private val gender: GENDERTYPE,
    private val genderPreference: GENDERTYPE,
)