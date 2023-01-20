package com.finescore.moneycookie.services.generator;

import com.fasterxml.jackson.databind.JsonNode;
import com.finescore.moneycookie.models.ItemInfo;
import com.finescore.moneycookie.services.factory.AllItemsRequestFactory;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AllItemsGenerator implements Generator<List<ItemInfo>> {
    private AllItemsRequestFactory factory;

    @Override
    public List<ItemInfo> get() throws IOException, ParserConfigurationException, SAXException {
        JsonNode allItems = factory.request().get("block1");

        return getItemInfos(allItems);
    }

    private List<ItemInfo> getItemInfos(JsonNode allItems) {
        List<ItemInfo> list = new ArrayList<>();

        for (JsonNode item : allItems) {
            String shortCode = item.get("short_code").asText();
            String name = item.get("codeName").asText();
            String market = item.get("marketEngName").asText();
            list.add(new ItemInfo(shortCode, name, market));
        }

        return list;
    }
}
