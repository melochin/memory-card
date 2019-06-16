package me.kazechin.memorycard.repository;

import com.zaxxer.hikari.HikariDataSource;
import me.kazechin.memorycard.MemoryCardApplication;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.annotation.PostConstruct;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.SQLException;

@ActiveProfiles("test")
@SpringBootTest(classes = MemoryCardApplication.class)
public class RepositoryTest {

    @Autowired
    HikariDataSource dataSource;

    @PostConstruct
    void init() throws FileNotFoundException, SQLException {
        Connection connection = dataSource.getConnection();
        ScriptRunner runner = new ScriptRunner(connection);
        // 创建表
        runner.runScript(new FileReader("./db/card.sql"));
        // 创建测试数据
        runner.runScript(new FileReader("./db/test.sql"));
    }

}
