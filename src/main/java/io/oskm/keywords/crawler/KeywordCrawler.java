package io.oskm.keywords.crawler;

import java.io.File;
import java.util.Set;
import java.util.regex.Pattern;

import org.apache.http.Header;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import edu.uci.ics.crawler4j.crawler.Page;
import edu.uci.ics.crawler4j.crawler.WebCrawler;
import edu.uci.ics.crawler4j.parser.HtmlParseData;
import edu.uci.ics.crawler4j.url.WebURL;
import edu.uci.ics.crawler4j.util.IO;

public class KeywordCrawler extends WebCrawler {
	private static final Logger LOG = LoggerFactory
			.getLogger(KeywordCrawler.class);

	private final static Pattern FILTERS = Pattern
			.compile(".*(\\.(css|js|bmp|gif|jpe?g"
					+ "|png|tiff?|mid|mp2|mp3|mp4"
					+ "|wav|avi|mov|mpeg|ram|m4v|pdf"
					+ "|rm|smil|wmv|swf|wma|zip|rar|gz))$");
	private static File storageFolder;

	public static void configure(String storageFolderName) {

		storageFolder = new File(storageFolderName);
		if (!storageFolder.exists()) {
			storageFolder.mkdirs();
		}
	}

	/**
	 * You should implement this function to specify whether the given url
	 * should be crawled or not (based on your crawling logic).
	 */
	@Override
	public boolean shouldVisit(Page page, WebURL url) {
		String href = url.getURL().toLowerCase();
		return !FILTERS.matcher(href).matches();
	}

	/**
	 * This function is called when a page is fetched and ready to be processed
	 * by your program.
	 */
	@Override
	public void visit(Page page) {
		int docid = page.getWebURL().getDocid();
		String url = page.getWebURL().getURL();
		String domain = page.getWebURL().getDomain();
		String path = page.getWebURL().getPath();
		String subDomain = page.getWebURL().getSubDomain();
		String parentUrl = page.getWebURL().getParentUrl();
		String anchor = page.getWebURL().getAnchor();

		LOG.debug("Docid: {}", docid);
		LOG.info("URL: ", url);
		LOG.debug("Domain: '{}'", domain);
		LOG.debug("Sub-domain: '{}'", subDomain);
		LOG.debug("Path: '{}'", path);
		LOG.debug("Parent page: {}", parentUrl);
		LOG.debug("Anchor text: {}", anchor);

		if (page.getParseData() instanceof HtmlParseData) {
			HtmlParseData htmlParseData = (HtmlParseData) page.getParseData();
			String text = htmlParseData.getText();
			String html = htmlParseData.getHtml();
			Set<WebURL> links = htmlParseData.getOutgoingUrls();

			LOG.debug("Text length: " + text.length());
			LOG.debug("Html length: " + html.length());
			LOG.debug("Number of outgoing links: " + links.size());
		}

		Header[] responseHeaders = page.getFetchResponseHeaders();
		if (responseHeaders != null) {
			LOG.debug("Response headers:");
			for (Header header : responseHeaders) {
				LOG.debug("\t{}: {}", header.getName(), header.getValue());
			}
		}

		// Not interested in very small images
		if (page.getContentData().length < 10 * 1024) {
			return;
		}

		// get a unique name for storing this image
		String extension = url.substring(url.lastIndexOf("."));
		String hashedName = Cryptography.MD5(url) + extension;

		// store image
		IO.writeBytesToFile(page.getContentData(),
				storageFolder.getAbsolutePath() + "/" + hashedName);

		logger.info("Stored: {}", url);
	}
}
