package com.tinder.dating.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.ReadPreference
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.bson.json.Converter
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import java.util.*

@Configuration
@EnableMongoRepositories(
    basePackages = [ "com.tinder.dating.nosqlData.repo" ]
)
class NoSQLDBConfig: AbstractMongoClientConfiguration() {

    private val converters: List<Converter<Any>> = ArrayList<Converter<Any>>()

    override fun getDatabaseName(): String {
        return "tinder-app" //Look into this
    }

    override fun mongoClient(): MongoClient {
        val connectionString = ConnectionString("mongodb+srv://sascha:Tinder2.0App@firstcluster.5u8vnqw.mongodb.net/tinder-app?ssl=true")//"mongodb+srv://firstcluster.5u8vnqw.mongodb.net:27017/tinder-app/user=sascha&password=Tinder2.0App&sslmode=require"
        return MongoClients.create(
            MongoClientSettings.builder()
                .applyConnectionString(connectionString)
                .retryWrites(true)
                .readPreference(ReadPreference.primaryPreferred())
                .build())
    }

    override fun getMappingBasePackages(): MutableCollection<String> {
        return Collections.singleton("com.tinder.dating.nosqlData")
    }
}