/*
package com.tinder.dating.config

import com.zaxxer.hikari.HikariDataSource
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary

@Configuration(proxyBeanMethods = false)
class DataSourceConfig {

    @Bean
    @Primary
    @ConfigurationProperties("spring.sql.datasource")
    fun sqlDataSourceProperties(): DataSourceProperties {
        return DataSourceProperties()
    }

    @Bean
    @Primary
    @ConfigurationProperties("spring.sql.configuration")
    fun sqlDataSource(sqlDataSourceProperties: DataSourceProperties): HikariDataSource {
        return sqlDataSourceProperties.initializeDataSourceBuilder().type(HikariDataSource::class.java).build()
    }

    @Bean
    @ConfigurationProperties("spring.nosql.datasource")
    fun nosqlDataSourceProperties(): DataSourceProperties {
        return DataSourceProperties()
    }

    @Bean
    @ConfigurationProperties("spring.nosql.configuration")
    fun nosqlDataSource(nosqlDataSourceProperties: DataSourceProperties): HikariDataSource {
        return nosqlDataSourceProperties.initializeDataSourceBuilder().type(HikariDataSource::class.java).build()
    }
}
*/