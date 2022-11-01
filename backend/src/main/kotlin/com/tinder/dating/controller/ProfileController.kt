package com.tinder.dating.controller

import com.tinder.dating.nosqlData.domain.GENDERTYPE
import com.tinder.dating.nosqlData.domain.Match
import com.tinder.dating.nosqlData.domain.Message
import com.tinder.dating.nosqlData.domain.Profile
import com.tinder.dating.service.MatchService
import com.tinder.dating.service.ProfileService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.security.Principal
import java.util.*
import kotlin.collections.ArrayList

@RestController
class ProfileController @Autowired constructor(
    private val profileService: ProfileService,
    private val matchService: MatchService,
) {

    @PostMapping("/profiles")
    @PreAuthorize("hasAuthority('create:profile')")
    fun saveProfile(@Payload profile: Profile): ResponseEntity<Any> {
        val profile: Profile = profileService.saveProfile(profile)
        return ResponseEntity.ok(profile)
    }

    @GetMapping("/profiles")
    @PreAuthorize("hasAuthority('read:allprofiles')")
    fun retrieveAllProfiles(): ResponseEntity<Any> {
        val profiles = profileService.fetchAllProfiles()
        return ResponseEntity.ok(profiles)
    }

    @GetMapping("/possibleProfiles")
    @PreAuthorize("hasAuthority('create:messages')")
    fun retrievePossibleProfiles(): ResponseEntity<List<Profile>> {
        var listOfPossibleMatches: List<Profile> = ArrayList()
        if(listOfPossibleMatches.isEmpty()) {
            val profiles = profileService.fetchPossibleProfiles()
        }
        val profiles = profileService.fetchPossibleProfiles()
        return ResponseEntity.ok(profiles)
    }

    @GetMapping("/profile/{name}")
    @PreAuthorize("hasAuthority('create:messages')")
    fun retrieveProfiles(@PathVariable(value = "name") name: String): ResponseEntity<Profile> {
        val profile: Profile = profileService.fetchProfileByName(name)
        return ResponseEntity.ok(profile)
    }

}