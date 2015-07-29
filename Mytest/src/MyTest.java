import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MyTest {
	public static void main(String args[]) {
		// 按指定模式在字符串查找
		String line = "2005-08-18 14:21:12 15811487790 192.168.1.1 192.168.1.2";
		String pattern = "(.*?\\s.*?)\\s(.*?)\\s(.*?)\\s(.*?)";

		// 创建 Pattern 对象
		Pattern r = Pattern.compile(pattern);

		// 现在创建 matcher 对象
		Matcher m = r.matcher(line);
		System.out.println(m.groupCount());
		if (m.find()) {
			System.out.println("Found value:0 " + m.group(0));
			System.out.println("Found value:1 " + m.group(1));
			System.out.println("Found value:2 " + m.group(2));
			System.out.println("Found value:3 " + m.group(3));
			System.out.println("Found value:4 " + m.group(4));
		} else {
			System.out.println("NO MATCH");
		}

		String[] arr = { "zero", "two" };
		List<String> mylist = new ArrayList<String>();
		for (String str : arr) {
			mylist.add(str);
		}
		System.out.println(mylist);
		mylist.add(1, "one");
		System.out.println(mylist);
		mylist.remove(1);
		System.out.println(mylist);
		
		Iterator<String> iterator =mylist.iterator();
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
			
		}
		
		HashMap<Integer, String> hashmap = new HashMap<Integer, String>();
		String one = "one";
		String two= "two";
		hashmap.put(1,one);
		hashmap.put(2,two);
		System.out.println(hashmap);
		
		
		Hashtable<Integer, String> hashtable = new Hashtable<Integer, String>();
		hashtable.put(1,one);
		hashtable.put(2,two);
		System.out.println(hashtable);
		
		
		
		
	}

}
