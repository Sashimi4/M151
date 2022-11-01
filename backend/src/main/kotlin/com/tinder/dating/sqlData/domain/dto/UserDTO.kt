package com.tinder.dating.sqlData.domain.dto

import lombok.Getter
import lombok.Setter
import java.util.*

@Getter
@Setter
data class UserDTO (

    private val id : UUID,

    private val email : String,

    private val countryName : String
    )