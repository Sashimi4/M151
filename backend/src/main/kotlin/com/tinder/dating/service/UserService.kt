package com.tinder.dating.service

import com.tinder.dating.sqlData.domain.User
import com.tinder.dating.sqlData.repo.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Transactional
@Service
class UserService @Autowired constructor(
    private val userRepository: UserRepository
) {

    fun findAllUsers(): MutableIterable<User> {
        return userRepository.findAll()
    }

    fun findUserByEmail(email: String): User {
        return userRepository.findUserByEmail(email)
    }

}