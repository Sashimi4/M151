package com.tinder.dating.sqlData.repo

import com.tinder.dating.sqlData.domain.User
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository: PagingAndSortingRepository<User, UUID> {
}