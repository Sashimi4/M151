package com.tinder.dating.sqlData.domain.dto

import com.tinder.dating.sqlData.domain.Role
import lombok.Getter
import lombok.Setter
import java.util.*

/**
 * User DTO without Password field
 */
@Getter
@Setter
data class UserDTO (

    private val id : UUID,

    private val email : String,

    //private val roles: Set<Role>,

    private val countryName : String
    )