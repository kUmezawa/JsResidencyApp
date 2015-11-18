/**
 * 一定のJSONを返すクラスです
 */
package com.ibm.jp.jra.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ibm.jp.jra.bean.Result;


/**
 * @author 日本IBM梅沢
 *
 */
@Path("/softwareProduct")
public class GenerateConstantValueService {
	
	@Path("/search")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response searchSoftwareProduct(@FormParam("productName") String productName){
		Result result = new Result();
		result.setName(productName);
		result.setType("種別テスト");
		result.setMaker("IBM");
		result.setYmd("1991-02-21T23:02:31+06:00");
		List<Result> list = new ArrayList<Result>();
		list.add(result);
		return Response.ok(list).build();
	}
}
