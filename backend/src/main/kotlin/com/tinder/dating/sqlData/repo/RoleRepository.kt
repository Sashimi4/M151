package com.tinder.dating.sqlData.repo

import com.tinder.dating.sqlData.domain.Role
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface RoleRepository: PagingAndSortingRepository<Role, UUID> {
}