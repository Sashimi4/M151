package com.tinder.dating.nosqlData.repo

import com.tinder.dating.nosqlData.domain.Profile
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ProfileRepository: MongoRepository<Profile, UUID> {

    fun findByGenderAndGenderPreference(): List<Profile>

    fun findProfileByName(name: String): Profile

}