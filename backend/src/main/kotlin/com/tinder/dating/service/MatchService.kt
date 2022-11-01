package com.tinder.dating.service

import com.tinder.dating.nosqlData.repo.MatchRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class MatchService @Autowired constructor(
    private val matchRepository: MatchRepository
) {

}