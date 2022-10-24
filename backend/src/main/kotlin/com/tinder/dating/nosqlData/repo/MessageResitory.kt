package com.tinder.dating.nosqlData.repo

import com.tinder.dating.nosqlData.domain.Message
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.math.BigInteger

@Repository
interface MessageResitory : MongoRepository<Message, BigInteger> {

}