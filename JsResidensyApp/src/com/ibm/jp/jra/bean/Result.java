/**
 * サーバーから返す値を格納したクラスです
 */
package com.ibm.jp.jra.bean;

/**
 * @author 日本IBM梅沢
 *
 */
public class Result {
	private String name;
	private String type;
	private String maker;
	private String ymd;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMaker() {
		return maker;
	}
	public void setMaker(String maker) {
		this.maker = maker;
	}
	public String getYmd() {
		return ymd;
	}
	public void setYmd(String ymd) {
		this.ymd = ymd;
	}
}
