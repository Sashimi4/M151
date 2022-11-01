package com.tinder.dating.service

import com.tinder.dating.nosqlData.domain.Profile
import com.tinder.dating.nosqlData.repo.ProfileRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class ProfileService @Autowired constructor(
    private val profileRepository: ProfileRepository
) {

    fun saveProfile(profile: Profile): Profile {
        //error handling
        return profileRepository.save(profile)
    }

    fun fetchAllProfiles(): MutableList<Profile> {
        return profileRepository.findAll()
    }

    fun fetchPossibleProfiles(): List<Profile> {
        return profileRepository.findByGenderAndGenderPreference()
    }

    fun fetchProfileByName(name: String): Profile {
        return profileRepository.findProfileByName(name)
    }

}