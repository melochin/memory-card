package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Brochure;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface IBrochureRepository {

	@Select("select * from brochure where id=#{brochureId}")
	Brochure find(@Param("brochureId") Long brochureId);

	@Select("select * from brochure")
	List<Brochure> list();

	@Select("insert into brochure (`name`, description, user_id, create_time) " +
			"values (#{brochure.name}, #{brochure.description}, #{brochure.userId}, now())")
	void save(@Param("brochure") Brochure brochure);

	@Update("update brochure " +
			"set name=#{brochure.name}, description=#{brochure.description}")
	void modify(@Param("brochure") Brochure brochure);

	@Delete("delete from brochure where id=#{brochureId}")
	void delete(@Param("brochureId") Long brochureId);

}
