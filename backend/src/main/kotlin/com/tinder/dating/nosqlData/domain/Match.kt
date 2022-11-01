package com.tinder.dating.nosqlData.domain

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document(collection = "match")
data class Match (
    private val id: UUID,
    private val profileId_1: UUID,
    private val profileId_2: UUID,
)