package com.tinder.dating.nosqlData

import org.springframework.data.mongodb.repository.MongoRepository
import java.math.BigInteger

interface MessageResitory : MongoRepository<Message, BigInteger> {

}