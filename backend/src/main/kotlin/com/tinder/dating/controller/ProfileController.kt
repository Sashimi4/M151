package com.tinder.dating.controller

import com.tinder.dating.nosqlData.domain.GENDERTYPE
import com.tinder.dating.nosqlData.domain.Profile
import com.tinder.dating.service.ProfileService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import java.security.Principal
import java.util.*
import kotlin.collections.ArrayList

@Controller
class ProfileController @Autowired constructor(
    private val profileService: ProfileService
) {

    @PostMapping("/saveProfiles")
    fun test(user: Principal): ResponseEntity<Any> {
        print(user)
        val photoUrl = "data:image/jpeg;base64,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"
        val profile = profileService.saveProfile(
            Profile(UUID.randomUUID(),
                UUID.fromString("b192620f-824e-476a-b438-5769a128c31b"),
                "Janet",
                photoUrl,
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                GENDERTYPE.FEMALE,
                GENDERTYPE.FEMALE
            ))
        return ResponseEntity.ok(profile)
    }

    @GetMapping("/getAllProfiles")
    //@PreAuthorize("hasAuthority('create:messages')")
    fun retrieveAllProfiles(): ResponseEntity<Any> {
        print("Fetching all profiles")
        val profiles = profileService.fetchAllProfiles()
        return ResponseEntity.ok(profiles)
    }

    @GetMapping("/getPossibleProfiles")
    //@PreAuthorize("hasAuthority('create:messages')")
    fun retrievePossibleProfiles(): ResponseEntity<List<Profile>> {
        var listOfPossibleMatches: List<Profile> = ArrayList()
        if(listOfPossibleMatches.isEmpty()) {
            val profiles = profileService.fetchPossibleProfiles()
        }
        val profiles = profileService.fetchPossibleProfiles()
        return ResponseEntity.ok(profiles)
    }

    @GetMapping("/profile/{name}")
    //@PreAuthorize("hasAuthority('create:messages')") => this works now
    fun retrieveProfiles(@PathVariable(value = "name") name: String): String {
        val profile: Profile = profileService.fetchProfileByName(name)
        return profile.aboutDescription.toString()
    }

}