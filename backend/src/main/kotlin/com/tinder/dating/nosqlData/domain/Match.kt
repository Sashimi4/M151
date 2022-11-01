package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "match")
data class Match (
    val id: UUID,
    val profileId_1: UUID,
    val profileId_2: UUID,
)