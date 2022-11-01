package com.tinder.dating.service

import com.tinder.dating.nosqlData.domain.Match
import com.tinder.dating.nosqlData.repo.MatchRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Transactional
@Service
class MatchService @Autowired constructor(
    private val matchRepository: MatchRepository
) {

    fun saveMatch(match: Match) {
        matchRepository.save(match)
    }
}