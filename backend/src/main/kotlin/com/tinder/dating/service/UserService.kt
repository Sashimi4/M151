package com.tinder.dating.service

import com.tinder.dating.sqlData.domain.User
import com.tinder.dating.sqlData.repo.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserService @Autowired constructor(
    private val userRepository: UserRepository
) {

    fun findAllUsers(): MutableIterable<User> {
        return userRepository.findAll()
    }

}