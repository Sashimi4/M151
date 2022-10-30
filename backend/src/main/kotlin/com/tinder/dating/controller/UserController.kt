package com.tinder.dating.controller

import com.tinder.dating.service.ChatRoomService
import com.tinder.dating.service.MessageService
import com.tinder.dating.service.UserService
import com.tinder.dating.sqlData.repo.CountryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping

@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"],
    allowedHeaders = ["Requestor-Type"],
    exposedHeaders = ["X-Get-Header"]
)
@Controller
class UserController @Autowired constructor(
    private val userService: UserService,
    private val countryRepository: CountryRepository
) {


    @GetMapping("/getAllUsers")
    fun test(): ResponseEntity<Any> {
        val users = userService.findAllUsers()
        return ResponseEntity.ok(users)
    }

    @GetMapping("/getAllCountries")
    fun test2(): ResponseEntity<Any> {
        val countries = countryRepository.findAll()
        return ResponseEntity.ok(countries)
    }
}