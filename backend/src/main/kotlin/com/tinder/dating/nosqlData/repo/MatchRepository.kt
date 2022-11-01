package com.tinder.dating.nosqlData.repo

import com.tinder.dating.nosqlData.domain.Match
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface MatchRepository: MongoRepository<Match, UUID> {

}