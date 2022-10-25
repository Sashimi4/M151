package com.tinder.dating.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.ReadPreference
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.transaction.annotation.EnableTransactionManagement
import java.util.*


@Configuration
@EnableTransactionManagement
@EnableMongoRepositories(
    basePackages = [ "com.tinder.dating.nosqlData.repo" ]
)
class NoSQLDBConfig: AbstractMongoClientConfiguration() {

    override fun getDatabaseName(): String {
        return "tinder-app" //Look into this
    }

    override fun mongoClient(): MongoClient {
        val connectionString = ConnectionString("mongodb+srv://sascha:Tinder2.0App@firstcluster.5u8vnqw.mongodb.net/tinder-app?retryWrites=true&w=majority")//"mongodb+srv://firstcluster.5u8vnqw.mongodb.net:27017/tinder-app/user=sascha&password=Tinder2.0App&sslmode=require"
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